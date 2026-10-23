'use client'

import type { ReactNode } from 'react'

import { ProtectedStudentRoute } from './ui/atoms/ProtectedStudentRoute'
import { StudentPage } from './ui/templates/StudentPage'

export default function StudentLayoutApp({ children }: { children: ReactNode }) {
    return (
        <ProtectedStudentRoute>
            <StudentPage>
                { (children) }
            </StudentPage>
        </ProtectedStudentRoute>
    )
}
