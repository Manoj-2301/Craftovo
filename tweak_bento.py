import os

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Update shadow and hover on the arrow button
content = content.replace(
    'bg-white shadow-sm shrink-0',
    'bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] shrink-0'
)

# Update gradient to be stronger at the bottom
content = content.replace(
    'from-[#F4F4F6] via-[#F4F4F6]/90 to-transparent',
    'from-[#F4F4F6] from-30% via-[#F4F4F6]/80 to-transparent'
)

# Make the title bigger and slightly bolder if needed
content = content.replace(
    'text-4xl md:text-5xl font-medium',
    'text-4xl md:text-5xl font-medium'
)

# Ensure the description is styled like the screenshot
content = content.replace(
    'text-text-muted font-light text-lg md:text-xl leading-relaxed',
    'text-text-muted font-light text-lg md:text-xl leading-relaxed'
)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

