import { client } from "../database/prisma";

export async function getTeacherByTeacherName(teacherName: string) {
    return client.teachers.findFirst({ where: { name: teacherName } });
}

export async function getDisciplineByDisciplineName(disciplineName: string) {
    return client.disciplines.findFirst({ where: { name: disciplineName } });
}

export async function getTeacherDisciplineIdFromIDs(teacherId: number, disciplineId: number) {
    return client.teachersDisciplines.findFirst({ where: { teacherId, disciplineId } });
}