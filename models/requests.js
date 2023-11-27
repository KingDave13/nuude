import mongoose, { Schema, model, models } from 'mongoose';

const RequestSchema = newSchema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['Pending', 'Successful'],
            default: 'Pending',
        },
        paymentType: {
            type: String,
            enum: ['Annual Membership', 'Guest Ticket'],
        },
        paymentReference: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
    },

    { timestamps: true }
);