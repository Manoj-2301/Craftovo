import os

def replace_in_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w') as f:
        f.write(content)

replace_in_file('src/app/page.tsx', [
    # Re-verify the icon has NO border and correct shadow
    ('w-14 h-14 rounded-full border border-black/5 flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] shrink-0', 'w-14 h-14 rounded-full flex items-center justify-center text-text-main group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] shrink-0'),
])

