'use client';
import { redirect } from 'next/navigation';
import Home from '../page';

export default function Dashboard() {
	// Redirect to home page content but keep /dashboard in URL
	return <Home />;
}