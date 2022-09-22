import { extendType, FieldResolver, } from "nexus";
import db from "../database/db";
import { validateInput } from "../validateInput";
import { RegisterResponse, StudentInput } from "../schemas/student";
import * as Yup from "yup"

//Mutation to update database
export const createStudent = extendType({
    type: "Mutation",
    definition: t => {
        t.field("createStudent", {
            type: RegisterResponse,
            args: { info: StudentInput },
            resolve: createStudentResolver
        })
    }
});


export const createStudentResolver: FieldResolver<"Mutation", "createStudent"> = async (_, { info }) => {
    try {
        const { name, email, rollno } = info;
        await validateInput.validate(info)
        const ID = await db("student").insert([{ rollno, name, email }])

        return {
            message: "Student created with Id " + ID,
            error: false
        }
    } catch (err) {
        const message = (err as Yup.ValidationError).message || "Invalid Input";
        return { message, error: true }
    }
}