import { client } from "../database/prisma";
import { INewTest } from "../types/TestsTypes";

export async function createNewTest(newTest: INewTest) {
    return client.tests.create({ data: newTest });
}

export async function getTestsArrangedByDiscipline() {
    return client.terms.findMany({
        include: {
            disciplines: {
                orderBy: { termId: "asc" },
                include: {
                    teachersDisciplines: {
                        select: {
                            tests: {
                                distinct: ["categoryId"],
                                select: {
                                    categories: {
                                        select: {
                                            id: true,
                                            name: true,
                                            tests: {
                                                select: {
                                                    name: true,
                                                    pdfUrl: true,
                                                    teacherDiscipline: {
                                                        select: {
                                                            teachers: true
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })
};
