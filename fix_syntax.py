import os

def check_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    print(f"Checking {filepath}: length {len(content)}")

check_file('src/app/page.tsx')
