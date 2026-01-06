import React, { useState } from 'react';
import { Globe, BookOpen, Users, Award, CheckCircle, Menu, X, Star, Play, ArrowRight, Zap, Calendar, Video, Search } from 'lucide-react';
import './LandingPage.css';
import logo from '../assets/logo.png'

export default function LanguageLandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        language: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showInstructorModal, setShowInstructorModal] = useState(false);

    const handleSubmit = () => {
        if (formData.name && formData.email && formData.language) {
            setFormSubmitted(true);
            setTimeout(() => {
                setFormSubmitted(false);
                setFormData({ name: '', email: '', phone: '', language: '' });
            }, 3000);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Language data with 0 tutors as requested
    const languages = [
        { name: "Afrikaans", tutors: 0, icon: "🇿🇦" },
        { name: "Albanian", tutors: 0, icon: "🇦🇱" },
        { name: "Amharic", tutors: 0, icon: "🇪🇹" },
        { name: "Arabic", tutors: 0, icon: "🇸🇦" },
        { name: "Asante", tutors: 0, icon: "🇬🇭" },
        { name: "Armenian", tutors: 0, icon: "🇦🇲" },
        { name: "Azerbaijani", tutors: 0, icon: "🇦🇿" },
        { name: "Baluchi", tutors: 0, icon: "🇵🇰" },
        // { name: "Bengali", tutors: 0, icon: "🇧🇩" },
        // { name: "Bulgarian", tutors: 0, icon: "🇧🇬" },
        // { name: "Cantonese", tutors: 0, icon: "🇭🇰" },
        // { name: "Chinese", tutors: 0, icon: "🇨🇳" },
        // { name: "Czech", tutors: 0, icon: "🇨🇿" },
        // { name: "Danish", tutors: 0, icon: "🇩🇰" },
        // { name: "Dutch", tutors: 0, icon: "🇳🇱" },
        // { name: "English", tutors: 0, icon: "🇺🇸" },
        // { name: "French", tutors: 0, icon: "🇫🇷" },
        // { name: "German", tutors: 0, icon: "🇩🇪" },
        // { name: "Greek", tutors: 0, icon: "🇬🇷" },
        // { name: "Hebrew", tutors: 0, icon: "🇮🇱" },
        // { name: "Hindi", tutors: 0, icon: "🇮🇳" },
        // { name: "Italian", tutors: 0, icon: "🇮🇹" },
        // { name: "Japanese", tutors: 0, icon: "🇯🇵" },
        // { name: "Korean", tutors: 0, icon: "🇰🇷" }
    ];

    // Sample reviews
    const reviews = [
        { id: 1, name: "Carolyn Ortiz", rating: 4.5, text: "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing ", language: "", avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3ca?w=50&h=50&fit=crop" },
        { id: 2, name: "Dennis Barrett", rating: 4, text: "At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending.", language: "", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* SEO Meta Tags */}
            <meta name="description" content="Learn languages with expert native tutors. Personalized one-on-one lessons for Spanish, French, German, Italian, Chinese, Japanese and more." />
            <meta name="keywords" content="language learning, online tutors, native speakers, Spanish lessons, French classes, German courses" />
            <meta name="author" content="LinguaLearn" />
            <meta property="og:title" content="Learn Languages with Expert Native Tutors | LinguaLearn" />
            <meta property="og:description" content="Master languages through personalized one-on-one lessons with certified native speakers." />
            <meta property="og:type" content="website" />

            {/* Navigation */}
            <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <img
                                src={logo}
                                alt="Logo"
                                className="absolute top-0 left-0 h-20 w-20 object-cover"
                            />
                            <div className="flex items-center space-x-3 ml-24">
                                <a href="#tutors" className="text-orange-600 hover:text-orange-700 transition-colors duration-300 font-medium">Find language tutors</a>
                                <a href="#tutors" className="text-orange-600 hover:text-orange-700 transition-colors duration-300 font-medium">Find academic tutors</a>
                                <a href="#tutors" className="text-orange-600 hover:text-orange-700 transition-colors duration-300 font-medium">Become a tutor</a>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#how-it-works" className="text-orange-600 hover:text-orange-700 transition-colors duration-300 font-medium">How It Works</a>
                            <a href="#reviews" className="text-orange-600 hover:text-orange-700 transition-colors duration-300 font-medium">Reviews</a>
                            <a href="#contact" className="text-orange-600 hover:text-orange-700 transition-colors duration-300 font-medium">Contact</a>
                            <button className="bg-orange-400 text-white px-6 py-2 rounded-full hover:bg-orange-500 transition-colors duration-300">
                                Start Teaching Today
                            </button>
                        </div>

                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-orange-50 border-t border-orange-200">
                        <div className="px-4 pt-4 pb-6 space-y-3">
                            <a href="#tutors" className="block py-3 text-orange-700 hover:text-orange-800 transition-colors font-medium">Expert Tutors</a>
                            <a href="#how-it-works" className="block py-3 text-orange-700 hover:text-orange-800 transition-colors font-medium">How It Works</a>
                            <a href="#reviews" className="block py-3 text-orange-700 hover:text-orange-800 transition-colors font-medium">Reviews</a>
                            <a href="#contact" className="block py-3 text-orange-700 hover:text-orange-800 transition-colors font-medium">Contact</a>
                            <button className="w-full bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition-colors duration-300 mt-4">
                                Start Teaching Today
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                                    Learn a New Language
                                    <br />
                                    <span className="text-orange-500">
                                        with Expert Native Tutors
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    Master languages through personalized one-on-one lessons with certified native speakers. Join thousands achieving fluency in record time.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact" className="group bg-orange-400 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center">
                                    Start Teaching Today
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                                <button className="group bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 border-2 border-gray-200 hover:border-orange-300 transition-colors duration-300 flex items-center justify-center">
                                    <Search className="w-5 h-5 mr-2" />
                                    Find Tutors
                                </button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                                {[
                                    { number: "0k", label: "Online Courses" },
                                    { number: "0+", label: "Expert Tutors" },
                                    { number: "0K+", label: "Online Students" },
                                    { number: "0K+", label: "Certified Courses" },
                                ].map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <p className="text-4xl font-bold text-orange-500">{stat.number}</p>
                                        <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                                alt="Students learning languages"
                                className="rounded-2xl shadow-xl w-full object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                                <div className="flex items-center space-x-3">
                                    <div className="flex">
                                        {[1, 2, 3, 4].map(i => (
                                            <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                                        ))}
                                        <Star key={5} className="w-5 h-5 fill-orange-200 text-orange-400" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-900">4.5/5</p>
                                        <p className="text-sm text-gray-600">Student Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Tutors Section */}
            <section id="tutors" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <p className="inline-flex items-center px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold tracking-wide uppercase mb-4">
                            Our tutors
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
                            Expert Tutors
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Learn from certified native speakers with years of teaching experience and proven results.
                        </p>
                    </div>

                    {/* Languages grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {languages.map((language, index) => (
                            <article
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl px-5 py-6 text-center hover:border-orange-400 transition-colors duration-200"
                            >
                                <div className="text-4xl mb-3" aria-hidden="true">
                                    {language.icon}
                                </div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                                    {language.name}
                                </h3>
                                <p className="text-xs text-gray-600 mb-3">
                                    {language.tutors} tutors available
                                </p>
                                <button
                                    type="button"
                                    className="text-xs font-medium text-orange-600 hover:text-orange-700 underline underline-offset-4"
                                >
                                    View tutors
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            {/* How It Works - Professional Design */}
            <section id="how-it-works" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Start your language learning journey in three simple steps
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="#tutors"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 text-white text-base font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                            >
                                Find a tutor
                            </a>
                            <button
                                type="button"
                                onClick={() => setShowInstructorModal(true)}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-orange-500 bg-white text-orange-600 text-base font-semibold hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                            >
                                Become an instructor
                            </button>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Step 01 */}
                        <article className="flex flex-col">
                            <div className="w-full mb-4 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop"
                                    alt="Find a tutor"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center">
                                        <span className="text-lg font-semibold text-orange-500">01</span>
                                    </div>
                                    <Search className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Find a Tutor
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Browse through our list of skilled tutors and choose the one that
                                    best fits your learning needs. Each tutor is experienced and ready
                                    to help you achieve your goals.
                                </p>
                            </div>
                        </article>

                        {/* Step 02 */}
                        <article className="flex flex-col">
                            <div className="w-full mb-4 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&h=240&fit=crop"
                                    alt="Schedule lessons"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center">
                                        <span className="text-lg font-semibold text-orange-500">02</span>
                                    </div>
                                    <Calendar className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Schedule Lessons
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Easily book lessons at times that work best for you. Manage your
                                    sessions from a clear, organized schedule without any hassle.
                                </p>
                            </div>
                        </article>

                        {/* Step 03 */}
                        <article className="flex flex-col">
                            <div className="w-full mb-4 overflow-hidden rounded-2xl border border-gray-200 bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=240&fit=crop"
                                    alt="Start learning online"
                                    className="w-full h-40 object-cover"
                                />
                            </div>
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center">
                                        <span className="text-lg font-semibold text-orange-500">03</span>
                                    </div>
                                    <Video className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Start Learning
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Join your sessions, interact with your tutor in real time, and
                                    follow your progress as your confidence grows lesson by lesson.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>


            {/* Reviews Section */}
            <section id="reviews" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="inline-flex items-center px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold tracking-wide uppercase mb-4">
                            Student feedback
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
                            Reviews
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Some valuable feedback from our students around the world.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review) => (
                            <article
                                key={review.id}
                                className="h-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-6 flex flex-col"
                            >
                                <header className="flex items-center gap-3 mb-4">
                                    <img
                                        src={review.avatar}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover border border-gray-200"
                                    />
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900">
                                            {review.name}
                                        </h3>
                                        <div className="flex items-center gap-1 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </header>

                                <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">
                                    “{review.text}”
                                </p>

                                <footer className="flex items-center justify-between text-xs text-gray-500">
                                    <span className="font-medium text-orange-500">
                                        Learning {review.language}
                                    </span>
                                    <span>
                                        {review.lessonsCompleted
                                            ? `${review.lessonsCompleted}+ lessons completed`
                                            : 'Verified student'}
                                    </span>
                                </footer>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            {/* Contact Form */}
            <section id="contact" className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
                            Ready to Start Learning?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Fill out the form below and we&apos;ll match you with the perfect tutor for your language journey.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10">
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Language to Learn <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="language"
                                    value={formData.language}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 bg-white"
                                >
                                    <option value="">Select a language</option>
                                    <option value="spanish">Spanish</option>
                                    <option value="french">French</option>
                                    <option value="german">German</option>
                                    <option value="italian">Italian</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="japanese">Japanese</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-orange-500 text-white text-base font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                        >
                            Contact Support
                        </button>

                        {formSubmitted && (
                            <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">
                                <div className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                                    <p className="text-green-800 font-semibold text-base">
                                        Thank you! We&apos;ll contact you within 24 hours to get you started.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>


            <footer className="bg-black text-white pt-16 pb-8 text-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top columns */}
                    <div className="grid gap-10 md:grid-cols-4 text-gray-200 mb-10">
                        {/* Company */}
                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-white">
                                Company
                            </h4>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:underline">About us</a></li>
                                <li><a href="#" className="hover:underline">Contact us</a></li>
                                <li><a href="#" className="hover:underline">Review</a></li>
                                <li><a href="#" className="hover:underline">News and Blogs</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Affiliates</a></li>
                            </ul>
                        </div>

                        {/* Learn Online */}
                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-white">
                                Learn Online
                            </h4>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:underline">Become a student</a></li>
                                <li><a href="#" className="hover:underline">Refer a friend</a></li>
                                <li><a href="#" className="hover:underline">Reward a student</a></li>
                            </ul>
                        </div>

                        {/* Teaching */}
                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-white">
                                Teaching
                            </h4>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:underline">Become a tutor</a></li>
                                <li><a href="#" className="hover:underline">How to guide</a></li>
                                <li><a href="#" className="hover:underline">Join community</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-white">
                                Support
                            </h4>
                            <ul className="space-y-1">
                                <li><a href="#" className="hover:underline">Help Center</a></li>
                                <li><a href="#" className="hover:underline">Technical assistance</a></li>
                                <li><a href="#" className="hover:underline">Community guidelines</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Second row of columns */}
                    <div className="grid gap-10 md:grid-cols-4 text-gray-200 border-t border-gray-700 pt-8">
                        {/* Learning levels & pathways */}
                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-white">
                                Learning Levels & Pathways
                            </h4>
                            <ul className="space-y-1">
                                <li>Beginner level</li>
                                <li>Intermediate level</li>
                                <li>Advanced level</li>
                                <li>Business language courses</li>
                                <li>Exam preparation (IELTS, TOEFL)</li>
                            </ul>
                        </div>

                        {/* Language courses */}
                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-white">
                                Language Courses
                            </h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                                <span>English</span>
                                <span>Arabic</span>
                                <span>Spanish</span>
                                <span>Korean</span>
                                <span>French</span>
                                <span>Filipino</span>
                                <span>German</span>
                                <span>Hindi</span>
                                <span>Chinese</span>
                                <span>Swahili</span>
                                <span>Japanese</span>
                                <span>Hebrew</span>
                            </div>
                        </div>

                        {/* Academic courses */}
                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-white">
                                Academic Courses
                            </h4>
                            <ul className="space-y-1">
                                <li>English</li>
                                <li>Math</li>
                                <li>K–12 education</li>
                                <li>Computer science</li>
                                <li>Business management</li>
                                <li>Marketing</li>
                                <li>Music</li>
                            </ul>
                        </div>

                        {/* Tutor by country */}
                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-white">
                                Tutor by Country
                            </h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                                <span>USA</span>
                                <span>India</span>
                                <span>UK</span>
                                <span>Canada</span>
                                <span>Philippines</span>
                                <span>Germany</span>
                                <span>France</span>
                                <span>Argentina</span>
                                <span>Kenya</span>
                                <span>Australia</span>
                            </div>
                        </div>
                    </div>

                    {/* Follow us line */}
                    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300 text-xs">
                        <span className="mr-3 font-semibold tracking-wide">
                            FOLLOW US
                        </span>
                        <button className="mx-2 hover:underline">Facebook</button>
                        <button className="mx-2 hover:underline">Instagram</button>
                        <button className="mx-2 hover:underline">Twitter</button>
                        <button className="mx-2 hover:underline">LinkedIn</button>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-4 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-400 gap-3 border-t border-gray-700 pt-4">
                        <div className="text-center md:text-left">
                            Copyright © {new Date().getFullYear()} EduGlean LLC.
                            All rights reserved. Global online learning platform.
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href="#" className="hover:underline">Terms of Service</a>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Instructor Modal */}
            {showInstructorModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Become an Instructor!
                            </h2>
                            <button
                                onClick={() => setShowInstructorModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Share your passion and expertise with eager learners from around the world. Join our community of dedicated educators and make a difference in students' lives by teaching what you love.
                            </p>

                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                                <h3 className="font-semibold text-orange-900 mb-3">Why Teach With Us?</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Reach students from over 100 countries</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Set your own schedule and rates</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span>Access to teaching tools and resources</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button
                                    onClick={() => setShowInstructorModal(false)}
                                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                                >
                                    Maybe Later
                                </button>
                                <button
                                    onClick={() => setShowInstructorModal(false)}
                                    className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
