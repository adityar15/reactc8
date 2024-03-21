import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { MemoryRouter } from 'react-router-dom';
import PostList from '../pages/PostList';

describe('PostList', () => {
  // Mock fetch response
  const mockPosts = [
    { id: 1, title: 'Post 1', body: 'This is the first post' },
    { id: 2, title: 'Post 2', body: 'This is the second post' },
  ];

  beforeEach(() => {
    // Reset fetch mocks before each test
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPosts),
      })
    );
  });

  it('renders posts after fetching', async () => {
    const { findByText } = render(
      <MemoryRouter>
        <PostList />
      </MemoryRouter>
    );

    // Check if the posts are rendered
    await waitFor(() => {
      expect(findByText('Title: Post 1')).toBeDefined();
      expect(findByText('Body: This is the first post')).toBeDefined();
      expect(findByText('Title: Post 2')).toBeDefined();
      expect(findByText('Body: This is the second post')).toBeDefined();
    });
  });
});
