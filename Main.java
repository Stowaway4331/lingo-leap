import java.util.*;

public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int m = sc.nextInt();
    int n = sc.nextInt();

    int[][] matrix = new int[m][n];

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        matrix[i][j] = sc.nextInt();
      }
    }

    int dp[] = new int[m];
    int dp1[][] = new int[m][n+1];

    for(int i=0; i<m; i++) {
      Arrays.fill(dp1[i], -1);
    }

    for (int i = 0; i < m; i++) {
      dp[i] = Math.max(dp[Math.max(0, i - 1)], helper(dp1, matrix, i, 0));
    }

    System.out.println(dp[m - 1]);

    sc.close();
  }

  public static int helper(int[][] dp, int[][] matrix, int r, int c) {
    int m = matrix.length;
    int n = matrix[0].length;
    if (c == n - 1)
      return c;
    if (matrix[r][c + 1] > matrix[r][c]){
      if(dp[r][c+1] != -1) {
        return dp[r][c+1];
      }
      return dp[r][c+1] = helper(dp, matrix, r, c + 1);
    }
    if (r != 0 && matrix[r - 1][c + 1] > matrix[r][c]){
      if(dp[r-1][c+1] != -1) {
        return dp[r-1][c+1];
      }
      return dp[r-1][c+1] = helper(dp, matrix, r - 1, c + 1);
    }
    if (r != m - 1 && matrix[r + 1][c + 1] > matrix[r][c]){
      if(dp[r+1][c+1] != -1) {
        return dp[r+1][c+1];
      }
      return dp[r+1][c+1] = helper(dp, matrix, r + 1, c + 1);
    }
    else
      return c;
  }
}