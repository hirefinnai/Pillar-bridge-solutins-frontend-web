import nodemailer from 'nodemailer';

// Create transporter
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	},
	tls: {
		rejectUnauthorized: false // Allow self-signed certificates for GoDaddy
	},
	secure: true // Use SSL/TLS
});

export async function POST(req) {
	try {
		const body = await req.json();
		const { name, email, phone, whatsapp, nationality } = body;

		if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
			throw new Error('Email configuration is missing');
		}

		// Email content
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to: 'sawa.seido08@gmail.com',
			subject: 'Check Eligibility Request',
			html: `
				<h2>New Eligibility Check Request</h2>
				<p><strong>Name:</strong> ${name || 'Not provided'}</p>
				<p><strong>Email:</strong> ${email || 'Not provided'}</p>
				<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
				<p><strong>WhatsApp:</strong> ${whatsapp || 'Not provided'}</p>
				<p><strong>Nationality:</strong> ${nationality || 'Not provided'}</p>
			`,
			text: `Check Eligibility Request\n\nName: ${name || 'Not provided'}\nEmail: ${email || 'Not provided'}\nPhone: ${phone || 'Not provided'}\nWhatsApp: ${whatsapp || 'Not provided'}\nNationality: ${nationality || 'Not provided'}`
		};

		// Send email
		await transporter.sendMail(mailOptions);

		return new Response(JSON.stringify({ success: true }), {
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Email error:', error);
		return new Response(JSON.stringify({ success: false, error: error.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
}

