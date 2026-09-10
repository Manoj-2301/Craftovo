import re

with open('src/app/contact/page.tsx', 'r') as f:
    content = f.read()

# Add import
if "import { ContactForm }" not in content:
    content = content.replace("import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';", "import { AnimateIn } from '@/components/common/AnimateIn/AnimateIn';\nimport { ContactForm } from '@/components/common/ContactForm/ContactForm';")

# Replace form HTML
form_find_start = content.find('<form className="glass-panel')
form_find_end = content.find('</form>') + 7

if form_find_start != -1 and form_find_end != -1:
    content = content[:form_find_start] + '<ContactForm />' + content[form_find_end:]
    
with open('src/app/contact/page.tsx', 'w') as f:
    f.write(content)

