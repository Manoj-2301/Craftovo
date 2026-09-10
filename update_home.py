import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Add import
if "import { Testimonials }" not in content:
    content = content.replace("import { ComplianceChart } from '@/components/common/ComplianceChart/ComplianceChart';", "import { ComplianceChart } from '@/components/common/ComplianceChart/ComplianceChart';\nimport { Testimonials } from '@/components/common/Testimonials/Testimonials';")

# Add Testimonials
testimonials_str = "<Testimonials />\n        <CTASection />"
content = content.replace("<CTASection />", testimonials_str)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

