import re

# Update page.tsx
with open('src/app/page.tsx', 'r') as f:
    page_content = f.read()

# Fix multi-disciplinary team
team_find = 'our multi-disciplinary team delivers end-to-end solutions'
team_replace = 'our dedicated two-person team delivers end-to-end solutions'
page_content = page_content.replace(team_find, team_replace)

# Fix quality assurance heading and desc
qa_find = '''<SectionHeading 
                    badge="Quality Assurance"
                    title="Built to absolute perfection."
                    description="We don't just build websites; we engineer digital experiences that achieve 100% compliance in accessibility, best practices, SEO, and performance."
                  />'''
qa_replace = '''<SectionHeading 
                    badge="Quality Assurance"
                    title="Striving for excellence."
                    description="We don't just build websites; we engineer digital experiences that consistently achieve 95%+ compliance in accessibility, best practices, SEO, and performance."
                  />'''
page_content = page_content.replace(qa_find, qa_replace)

# Fix compliance charts
chart_find = '''<ComplianceChart value={100} label="Access" />
                     <ComplianceChart value={100} label="Practices" />
                     <ComplianceChart value={100} label="Perform" />
                     <ComplianceChart value={100} label="SEO" />'''
chart_replace = '''<ComplianceChart value={98} label="Access" />
                     <ComplianceChart value={95} label="Practices" />
                     <ComplianceChart value={96} label="Perform" />
                     <ComplianceChart value={99} label="SEO" />'''
page_content = page_content.replace(chart_find, chart_replace)

with open('src/app/page.tsx', 'w') as f:
    f.write(page_content)


# Update about/page.tsx
with open('src/app/about/page.tsx', 'r') as f:
    about_content = f.read()

# Fix team description
desc_find = 'We are a collective of passionate designers and engineers dedicated to building exceptional digital products that push boundaries.'
desc_replace = 'We are a passionate duo of a designer and an engineer dedicated to building exceptional digital products that push boundaries.'
about_content = about_content.replace(desc_find, desc_replace)

# Fix philosophy
phil_find = "Our team doesn't just write code;"
phil_replace = "We don't just write code;"
about_content = about_content.replace(phil_find, phil_replace)

with open('src/app/about/page.tsx', 'w') as f:
    f.write(about_content)

