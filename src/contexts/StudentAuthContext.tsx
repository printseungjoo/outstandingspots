import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import type Student from '../types/Student';

interface StudentAuthContextValue {
    student: Student | null;
    isStudent: boolean;
    loginStudent: (student: Student) => void;
    updateStudent: (student: Student) => void;
    logoutStudent: () => void;
}

const STUDENT_STORAGE_KEY = 'os-student';

function normalizeStudent(student: Student): Student {
    return {
        ...student,
        favorites: Array.isArray(student.favorites) ? student.favorites : []
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
        const normalized = normalizeStudent(nextStudent);
        writeStoredStudent(normalized);
        setStudent(normalized);
    };

    const logoutStudent = () => {
        writeStoredStudent(null);
        setStudent(null);
    };

    return (
        <StudentAuthContext.Provider value = {{ student, isStudent: student !== null, loginStudent, updateStudent, logoutStudent }}>
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
