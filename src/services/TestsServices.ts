import { getCategoryByName } from "../repositories/CategoriesRepository";
import { getDisciplineByDisciplineName, getTeacherByTeacherName, getTeacherDisciplineIdFromIDs } from "../repositories/TeacherDisciplineRepository";
import { createNewTest } from "../repositories/TestsRepository";
import { INewTest, INewTestInfo } from "../types/TestsTypes";

export async function postTestService(newTest: INewTestInfo) {
    const categoryId = await getCategoryId(newTest.category);
    const teacherDisciplineId = await getTeacherDisciplineId(newTest.teacher, newTest.discipline);

    const newTestData: INewTest = {
        name: newTest.name,
        pdfUrl: newTest.pdfUrl,
        categoryId,
        teacherDisciplineId
    }

    await createNewTest(newTestData);
}

// auxiliary functions

async function getCategoryId(categoryName: string) {
    const categoryId = await getCategoryByName(categoryName);

    if (!categoryId) throw { type: "error_notFound", message: "No such category name!" }
    return categoryId.id;
}

async function getTeacherDisciplineId(teacher: string, discipline: string) {
    const [teacherFromDB, disciplineFromDB] = await getTeacherAndDisciplineIDs(teacher, discipline);

    const teacherDisciplineFromDB = await getTeacherDisciplineIdFromIDs(teacherFromDB.id, disciplineFromDB.id);
    if (!teacherDisciplineFromDB) throw { type: "error_invalid_teacherDiscipline", message: "This teacher does not teach this discipline!" }

    return teacherDisciplineFromDB.id;
}

async function getTeacherAndDisciplineIDs(teacher: string, discipline: string) {
    const [teacherFromDB, disciplineFromDB] = await Promise.all([
        getTeacherByTeacherName(teacher),
        getDisciplineByDisciplineName(discipline)
    ]);
    if (!teacherFromDB) throw { type: "error_notFound", message: "No such teacher name!" }
    if (!disciplineFromDB) throw { type: "error_notFound", message: "No such discipline name!" }

    return [teacherFromDB, disciplineFromDB];
}