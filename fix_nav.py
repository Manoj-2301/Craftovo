import os
import glob

def fix_page(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Remove imports
    content = content.replace("import { Navbar } from '@/components/common/Navbar/Navbar';\n", "")
    content = content.replace("import { Navbar } from '@/components/common/Navbar/Navbar';", "")
    content = content.replace("import { Footer } from '@/components/common/Footer/Footer';\n", "")
    content = content.replace("import { Footer } from '@/components/common/Footer/Footer';", "")

    # Remove tags
    content = content.replace("<Navbar />", "")
    content = content.replace("<Footer />", "")

    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('src/app'):
    for file in files:
        if file == 'page.tsx':
            fix_page(os.path.join(root, file))

