import { inputObjectType, objectType } from "nexus";


export const Student = objectType({
    name: "Student",
    definition(s) {
        s.id("rollno")
        s.string("name")
        s.string("email")
    }
})

export const StudentInput = inputObjectType({
    name: "StudentInfo",
    definition: t => {
        t.nonNull.int("rollno");
        t.nonNull.string("name");
        t.nonNull.string("email")
    }
})

export const RegisterResponse = objectType({
    name: "createdResponse",
    definition: t => {
        t.nonNull.string("message");
        t.nonNull.boolean("error")
    }
})

