import { useForm } from 'react-hook-form';
import Image from 'next/image';

export default function NewsForm() {



  return (
    <div className="p-6 bg-white shadow-md rounded-md w-full">
      <h2 className="text-2xl font-bold mb-6">Create New Article</h2>
      <form  className="flex flex-col gap-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
          
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
           
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
           
            rows={6}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
         
            type="file"
            className="mt-1 block w-full text-sm text-gray-500"
          />
        </div>

        {/* Must Read */}
        <div className="flex items-center">
          <input
           
            type="checkbox"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label className="ml-2 block text-sm text-gray-900">Must Read</label>
        </div>

        {/* Editor's Pick */}
        <div className="flex items-center">
          <input
           
            type="checkbox"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label className="ml-2 block text-sm text-gray-900">Editor{"'"} s Pick</label>
        </div>

        {/* Mediahouse */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Mediahouse</label>
          <select
           
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="news">News</option>
            <option value="magazine">Magazine</option>
            <option value="blog">Blog</option>
          </select>
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Categories</label>
          <select
            
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
