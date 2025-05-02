"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import blogData from '@/texts.json';

const BlogPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BlogContent />
    </Suspense>
  );
};

const BlogContent = () => {

  return (
    <>
    </>
  );
};

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">
    <p className="text-lg">Loading...</p>
  </div>
);

export default BlogPage;
