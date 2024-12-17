import axios from 'axios';
import { CreatePostRequest, UpdatePostRequest } from '../types/post.types';

const API_BASE_URL = 'http://localhost:3000/api'; // Replace with your actual API URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const postApi = {
  getPosts: () => api.get('/posts'),
  getPost: (id: number) => api.get(`/posts/${id}`),
  createPost: (data: CreatePostRequest) => api.post('/posts', data),
  updatePost: (id: number, data: UpdatePostRequest) => api.put(`/posts/${id}`, data),
  deletePost: (id: number) => api.delete(`/posts/${id}`),
  likePost: (id: number) => api.post(`/posts/${id}/like`),
  unlikePost: (id: number) => api.delete(`/posts/${id}/like`),
  addComment: (postId: number, content: string) => 
    api.post(`/posts/${postId}/comments`, { content }),
  deleteComment: (postId: number, commentId: number) => 
    api.delete(`/posts/${postId}/comments/${commentId}`),
};
