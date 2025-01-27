export async function POST(req) {
	try {
		const data = await req.json();
		const { name, email, phone, whatsapp, nationality } = data;

		// Create email content
		const emailContent = `
Check Eligibility Request

Name: ${name}
Email: ${email}
Phone: ${phone}
WhatsApp: ${whatsapp}
Nationality: ${nationality}
		`;

		// Create mailto URL
		const mailtoUrl = `mailto:sawa.seido08@gmail.com?subject=Check Eligibility Request&body=${encodeURIComponent(emailContent)}`;

		return new Response(JSON.stringify({ success: true, mailtoUrl }), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
}