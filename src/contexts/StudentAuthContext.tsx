import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import type Student from '../types/Student';
import { prependRecentView as nextRecentViews } from '../lib/studentsApi';

interface StudentAuthContextValue {
    student: Student | null;
    isStudent: boolean;
    loginStudent: (student: Student) => void;
    updateStudent: (student: Student) => void;
    prependRecentView: (storeId: string) => boolean;
    logoutStudent: () => void;
}

const STUDENT_STORAGE_KEY = 'os-student';

function isNewerRecentViews(local: string[], incoming: string[]) {
    if (local.length === 0) return false;
    if (incoming.length === 0) return true;
    if (local[0] === incoming[0]) return false;
    return local.indexOf(incoming[0]) > 0;
}

function normalizeStudent(student: Student): Student {
    return {
        ...student,
        favorites: Array.isArray(student.favorites) ? student.favorites : [],
        recentViews: Array.isArray(student.recentViews) ? student.recentViews : []
    };
}

function readStoredStudent() {
    try {
        const raw = sessionStorage.getItem(STUDENT_STORAGE_KEY);
        return raw ? normalizeStudent(JSON.parse(raw) as Student) : null;
    } catch {
        return null;
    }
}

function writeStoredStudent(nextStudent: Student | null) {
    if (nextStudent) {
        sessionStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(nextStudent));
        return;
    }
    sessionStorage.removeItem(STUDENT_STORAGE_KEY);
}

const StudentAuthContext = createContext<StudentAuthContextValue | null>(null);

export function StudentAuthProvider({ children }: { children: ReactNode }) {
    const [student, setStudent] = useState<Student | null>(readStoredStudent);

    const loginStudent = (nextStudent: Student) => {
        const normalized = normalizeStudent(nextStudent);
        writeStoredStudent(normalized);
        setStudent(normalized);
    };

    const updateStudent = (nextStudent: Student) => {
        setStudent((current) => {
            const incoming = normalizeStudent(nextStudent);
            const merged: Student = current
                ? {
                    ...incoming,
                    recentViews: isNewerRecentViews(current.recentViews, incoming.recentViews)
                        ? current.recentViews
                        : incoming.recentViews
                }
                : incoming;
            writeStoredStudent(merged);
            return merged;
        });
    };

    const prependRecentView = (storeId: string) => {
        let changed = false;
        setStudent((current) => {
            if (!current) return current;
            if (current.recentViews[0] === storeId) return current;
            changed = true;
            const next = normalizeStudent({
                ...current,
                recentViews: nextRecentViews(current.recentViews, storeId)
            });
            writeStoredStudent(next);
            return next;
        });
        return changed;
    };

    const logoutStudent = () => {
        writeStoredStudent(null);
        setStudent(null);
    };

    return (
        <StudentAuthContext.Provider value = {{ student, isStudent: student !== null, loginStudent, updateStudent, prependRecentView, logoutStudent }}>
            { children }
        </StudentAuthContext.Provider>
    )
}

export function useStudentAuth() {
    const value = useContext(StudentAuthContext);
    if (!value) {
        throw new Error('useStudentAuth는 StudentAuthProvider 안에서만 사용할 수 있습니다.');
    }
    return value;
}
