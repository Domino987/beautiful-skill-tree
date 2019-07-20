import { useContext, useEffect } from 'react';
import { Skill } from '../models';
import AppContext from '../context/AppContext';

interface Props {
  data: Skill[];
}

function calculateNodeCount(data: Skill[]): number {
  return data.reduce((prev, curr) => {
    if (curr.children.length > 0) {
      return prev + 1 + calculateNodeCount(curr.children);
    }

    return prev + 1;
  }, 0);
}

function CalculateNodeCount({ data }: Props) {
  const { addToSkillCount } = useContext(AppContext);

  useEffect(() => {
    const count = calculateNodeCount(data);
    addToSkillCount(count);
  }, []);

  return null;
}

export default CalculateNodeCount;
