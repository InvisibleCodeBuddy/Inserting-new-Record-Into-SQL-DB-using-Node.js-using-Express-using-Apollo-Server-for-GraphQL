import { queryType } from "nexus";
import db from "../database/db";

export const Query = queryType({
    definition(s) {
        s.list.field('student', {
            type: 'Student', resolve: async () => {
                const students = await db("student").select("*")
                return [
                    ...students
                ]
            }
        })
    }
})