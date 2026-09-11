import os

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Make sure we don't have duplicated nested cards
# The previous search showed 4 cards, which is correct (Web, UI/UX, Mobile, E-commerce)
print(f"Content length is {len(content)}")

