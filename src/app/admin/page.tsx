'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'queries'>('reviews');
  const [reviews, setReviews] = useState<any[]>([]);
  const [contactQueries, setContactQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();
  
  // Check if user is authenticated as admin
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login'); // Redirect to login if not authenticated
      return;
    }
    
    if (status === 'authenticated' && session?.user?.role !== 'admin') {
      router.push('/'); // Redirect to home if not admin
      return;
    }
    
    if (status === 'authenticated') {
      fetchData();
    }
  }, [router, status, session]);
  
  const fetchData = async () => {
    try {
      // Fetch reviews
      const reviewsResponse = await fetch('/api/admin/reviews');
      
      if (reviewsResponse.ok) {
        const reviewsData = await reviewsResponse.json();
        setReviews(reviewsData.reviews);
      }
      
      // Fetch contact queries
      const queriesResponse = await fetch('/api/admin/contact-queries');
      
      if (queriesResponse.ok) {
        const queriesData = await queriesResponse.json();
        setContactQueries(queriesData.contactQueries);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleApproveReview = async (id: string, approved: boolean) => {
    try {
      const response = await fetch('/api/admin/reviews', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, approved }),
      });
      
      if (response.ok) {
        fetchData(); // Refresh data
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Error updating review');
      }
    } catch (error) {
      console.error('Error updating review:', error);
      alert('Error updating review');
    }
  };
  
  const handleDeleteReview = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this review?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/admin/reviews?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        fetchData(); // Refresh data
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Error deleting review');
      }
    } catch (error) {
      console.error('Error deleting review:', error);
      alert('Error deleting review');
    }
  };
  
  const handleUpdateQueryStatus = async (id: string, status: string) => {
    try {
      const response = await fetch('/api/admin/contact-queries', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status }),
      });
      
      if (response.ok) {
        fetchData(); // Refresh data
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Error updating query status');
      }
    } catch (error) {
      console.error('Error updating query status:', error);
      alert('Error updating query status');
    }
  };
  
  const handleDeleteQuery = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this query?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/admin/contact-queries?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        fetchData(); // Refresh data
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Error deleting query');
      }
    } catch (error) {
      console.error('Error deleting query:', error);
      alert('Error deleting query');
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-400">Manage reviews and contact queries</p>
        </header>
        
        <div className="mb-6 border-b border-gray-700">
          <nav className="flex space-x-6">
            <button
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
            <button
              className={`py-3 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'queries'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('queries')}
            >
              Contact Queries
            </button>
          </nav>
        </div>
        
        {activeTab === 'reviews' && (
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Manage Reviews</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Content</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {reviews.map((review) => (
                    <tr key={review.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{review.userName}</div>
                        <div className="text-sm text-gray-400">{review.userRole || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {review.company || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {review.rating}/5
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                        {review.content}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          review.approved 
                            ? 'bg-green-900 text-green-300' 
                            : 'bg-yellow-900 text-yellow-300'
                        }`}>
                          {review.approved ? 'Approved' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {!review.approved && (
                          <button
                            onClick={() => handleApproveReview(review.id, true)}
                            className="text-green-500 hover:text-green-400 mr-3"
                          >
                            Approve
                          </button>
                        )}
                        {review.approved && (
                          <button
                            onClick={() => handleApproveReview(review.id, false)}
                            className="text-red-500 hover:text-red-400 mr-3"
                          >
                            Reject
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteReview(review.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {reviews.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No reviews to display
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'queries' && (
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Manage Contact Queries</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {contactQueries.map((query) => (
                    <tr key={query.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-white">{query.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {query.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {query.company || 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate">
                        {query.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={query.status}
                          onChange={(e) => handleUpdateQueryStatus(query.id, e.target.value)}
                          className="bg-gray-700 text-white rounded px-2 py-1 text-sm"
                        >
                          <option value="pending">Pending</option>
                          <option value="in-progress">In Progress</option>
                          <option value="resolved">Resolved</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => handleDeleteQuery(query.id)}
                          className="text-red-500 hover:text-red-400"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {contactQueries.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No contact queries to display
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;