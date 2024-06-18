import { connectToDb } from "../../../../utils/database";
import FormData from "../../../../models/formData";

export const POST = async (req) => {
    const {
        userId,
        firstName,
        lastName,
        email,
        phone,
        birthdate,
        gender,
        employer,
        occupation,
        instagram,
        twitter,
        facebook,
        turnons,
        trait,
        contribution,
        mode,
        paymentType,
        reference,
    } = await req.json();

    try {
        await connectToDb();

        const newFormData = new FormData({
            userId,
            firstName,
            lastName,
            email,
            phone,
            birthdate,
            gender,
            employer,
            occupation,
            instagram,
            twitter,
            facebook,
            turnons,
            trait,
            contribution,
            mode,
            paymentType,
            reference,
        });

        await newFormData.save();

        return new Response(JSON.stringify(newFormData), {
            status: 201,
        });
    } catch (error) {
        return new Response('Failed to create a new form data', {
            status: 500,
        });
    }
};