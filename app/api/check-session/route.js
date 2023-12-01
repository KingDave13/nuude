export const POST = async (req) => {
    try {
        const body = await req.json();

        if (body) {
            return new Response(JSON.stringify({ isValid: true }), { status: 201 });
        } else {
            return new Response(JSON.stringify({ isValid: false }), { status: 401 });
        }

    } catch (error) {
        console.error('Error checking session:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
};
