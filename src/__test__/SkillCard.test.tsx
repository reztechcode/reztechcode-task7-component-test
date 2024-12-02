import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillCard from '../components/SkillCard';

describe('SkillCard Component', () => {
  it('renders the SkillCard component correctly with icon and title', () => {
    const testIcon = <svg data-testid="test-icon"><circle cx="12" cy="12" r="10" /></svg>;
    const testTitle = 'Test Skill';

    render(<SkillCard icon={testIcon} title={testTitle} />);

    // Memeriksa apakah ikon dirender
    const iconElement = screen.getByTestId('test-icon');
    expect(iconElement).toBeInTheDocument();

    // Memeriksa apakah judul dirender
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
  });

  it('applies the correct styles and structure', () => {
    const testIcon = <div data-testid="test-icon">Icon</div>;
    const testTitle = 'Skill Title';

    render(<SkillCard icon={testIcon} title={testTitle} />);

    const cardElement = screen.getByRole('heading', { level: 5, name: testTitle });
    expect(cardElement).toBeInTheDocument();

    // Memeriksa apakah elemen memiliki class tertentu
    expect(cardElement).toHaveClass('text-xl', 'lg:text-2xl', 'font-semibold', 'text-gray-800');
  });
});
