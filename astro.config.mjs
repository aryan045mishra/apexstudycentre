jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          # Use this line to point to your specific lock file
          cache-dependency-path: './path/to/your/package-lock.json'

      - name: Install dependencies
        run: npm install
        # Ensure the working directory matches the lock file location
        working-directory: './path/to/your'
