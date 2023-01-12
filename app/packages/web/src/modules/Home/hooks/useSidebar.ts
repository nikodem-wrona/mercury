import { useState } from 'react';

export enum Content {
  Incomes = 'incomes',
  Expenses = 'expenses',
}

type UseSidebar = () => {
  content: Content;
  handleSetContent: (content: Content) => void;
}

export const useSidebar: UseSidebar = () => {
  const [content, setContent] = useState<Content>(Content.Incomes);
  
  const handleSetContent = (content: Content) => {
    setContent(content);
  }

  return {
    content,
    handleSetContent,
  }
}
