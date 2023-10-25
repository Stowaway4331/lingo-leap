const generateMatrix = () => {
  let matrix = [];
  let m = Math.floor(Math.random() * 10);
  let n = Math.floor(Math.random() * 10);
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(Math.floor(Math.random() * 10));
    }
    matrix.push(row);
  }
  return matrix;
};

const helper = (dp, matrix, r, c) => {
  let m = matrix.length;
  let n = matrix[0].length;
  if (c == n - 1) return c;
  if (matrix[r][c + 1] > matrix[r][c]) {
    if (dp[r][c + 1] != -1) {
      return dp[r][c + 1];
    }
    return (dp[r][c + 1] = helper(dp, matrix, r, c + 1));
  }
  if (r != 0 && matrix[r - 1][c + 1] > matrix[r][c]) {
    if (dp[r - 1][c + 1] != -1) {
      return dp[r - 1][c + 1];
    }
    return (dp[r - 1][c + 1] = helper(dp, matrix, r - 1, c + 1));
  }
  if (r != m - 1 && matrix[r + 1][c + 1] > matrix[r][c]) {
    if (dp[r + 1][c + 1] != -1) {
      return dp[r + 1][c + 1];
    }
    return (dp[r + 1][c + 1] = helper(dp, matrix, r + 1, c + 1));
  } else return c;
};

const main = () => {
  let m = 4;
  let n = 4;

  let matrix = generateMatrix();

  // let matrix = [
  //   [2, 4, 3, 5],
  //   [5, 4, 9, 3],
  //   [3, 4, 2, 11],
  //   [10, 9, 13, 15],
  // ];

  let dp = new Array(m).fill(0);
  let dp1 = new Array(m);

  for (let i = 0; i < m; i++) {
    dp1[i] = new Array(n + 1).fill(-1);
  }

  for (let i = 0; i < m; i++) {
    dp[i] = Math.max(dp[Math.max(0, i - 1)], helper(dp1, matrix, i, 0));
  }

  console.log(dp[m - 1]);
  // console.log(matrix);
  // console.log(dp1);
};

main();
