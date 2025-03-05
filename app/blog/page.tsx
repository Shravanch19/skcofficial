"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const BlogPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BlogContent />
    </Suspense>
  );
};

const BlogContent = () => {
  type BlogKeys = 'dharavahik' | 'model-forge' | 'myjarvis';

  const blogData: Record<BlogKeys, { title: string; description: string; image: string; content: string }> = {
    dharavahik: {
      title: "Dharavahik - A Next.js Streaming Platform",
      description: "An overview of Dharavahik, a streaming platform built with Next.js.",
      image: "/Dharavahik_logo.png",
      content: `Dharavahik is an innovative streaming platform built using Next.js. It enables users to search for and stream movies/web series seamlessly. With AI-driven features, users can find content even if it's not in the database.`,
    },
    "model-forge": {
      title: "Model Forge - AI Model Generator",
      description: "How Model Forge helps automate AI model creation with Flask.",
      image: "/assets/MF_logo.jpeg",
      content: `Model Forge is an AI-based tool designed to automate the generation of machine learning models. Built with Flask, it allows users to define their dataset and get a model with minimal effort.`,
    },
    myjarvis: {
      title: "MyJarvis - AI Voice Assistant",
      description: "Building an AI voice assistant for automating daily tasks.",
      image: "/assets/Jarvis_Logo.jpeg",
      content: `MyJarvis is an AI-powered virtual assistant that can handle tasks like automation, reminders, and even basic coding help. It integrates with various APIs to provide seamless assistance.`,
    },
  };

  const searchParams = useSearchParams();
  const blog = searchParams.get('blog');

  const blogContent = blog && (blog in blogData) ? blogData[blog as BlogKeys] : undefined;

  if (!blogContent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900">
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <Link href="/blog" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:scale-105 transition-transform">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{blogContent.title} - Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white p-8">
        <Link href="/blog" className="text-blue-400 hover:underline">&larr; Back to Blogs</Link>

        <h1 className="text-3xl font-bold mt-4">{blogContent.title}</h1>
        <p className="text-gray-400">{blogContent.description}</p>

        <p className="mt-6 text-lg">{blogContent.content}</p>
      </div>
    </>
  );
};

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
    <p className="text-lg">Loading...</p>
  </div>
);

export default BlogPage;
