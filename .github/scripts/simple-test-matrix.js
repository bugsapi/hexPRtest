module.exports = ({ context }) => {
  const matrix = {
    include: [
      { 'test-type': 'unit' },
      { 'test-type': 'integration' }
    ]
  };
  
  // You can add logic here to modify the matrix based on the PR content
  // For example, checking labels or changed files

  return matrix;
};
