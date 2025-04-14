"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
// Dynamically import all category components
const CreateAnimalPost = dynamic(() => import('./postCategories/Animal'));
const CreateKidsPost = dynamic(() => import('./postCategories/Kids'));
const CreateBooksPost = dynamic(() => import('./postCategories/BooksSportsNHobbies'));
const FasionNBeauty = dynamic(() => import('./postCategories/FasionNBeauty'));
const JobPostingForm = dynamic(() => import('./postCategories/Jobs'));
const ServicePostingForm = dynamic(() => import('./postCategories/Services'));
const BusinessIndustrialForm = dynamic(() => import('./postCategories/BusinessIndustrialAgriculture'));
const BikesPosting = dynamic(() => import('./postCategories/Bikes'));
const ElectronicsPosting = dynamic(() => import('./postCategories/Electronics&Home'));
const PropertyForRent = dynamic(() => import('./postCategories/Property_Rent'));
const PropertySalePosting = dynamic(() => import('./postCategories/Property_Sale'));
const VehiclesPosting = dynamic(() => import('./postCategories/Vehicles'));
const MobilesPosting = dynamic(() => import('./postCategories/Mobiles'));

const COMPONENT_MAP = {
  'CreateAnimalPost': CreateAnimalPost,
  'CreateKidsPost': CreateKidsPost,
  'CreateBooksPost': CreateBooksPost,
  'FasionNBeauty': FasionNBeauty,
  'JobPostingForm': JobPostingForm,
  'ServicePostingForm': ServicePostingForm,
  'BusinessIndustrialForm': BusinessIndustrialForm,
  'BikesPosting': BikesPosting,
  'ElectronicsPosting': ElectronicsPosting,
  'PropertyForRent': PropertyForRent,
  'PropertySalePosting': PropertySalePosting,
  'VehiclesPosting': VehiclesPosting,
  'MobilesPosting': MobilesPosting
};

function PostCreation() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const PostComponent = COMPONENT_MAP[category] || null;

  if (!category) {
    return (
      <div className="container py-4">
        <div className="alert alert-warning">
          No category selected. Please choose a category first.
          <Link href="/select-category" className="btn btn-primary ms-3">
            Choose Category
          </Link>
        </div>
      </div>
    );
  }

  if (!PostComponent) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger">
          Invalid category selected. Please choose a valid category.
          <Link href="/select-category" className="btn btn-primary ms-3">
            Choose Category
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <PostComponent />
    </div>
  );
}

export default PostCreation;