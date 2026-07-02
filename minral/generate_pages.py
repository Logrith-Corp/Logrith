import re, os

BASE = "/home/claude/minral"

products = [
    ("ai-growth-playbook", "AI Growth Playbook", "A step-by-step system to grow a product using AI-driven distribution."),
    ("startup-notion-kit", "Startup Notion Kit", "The exact Notion workspace to run a lean startup from idea to launch."),
    ("freelancer-toolkit", "Freelancer Toolkit", "Contracts, proposals, and invoice templates to run freelance work professionally."),
    ("prompt-vault-pro", "Prompt Vault Pro", "300+ tested prompts across writing, coding, research, and business tasks."),
    ("founder-os-bundle", "Founder OS Bundle", "The complete bundle — Growth Playbook, Notion Kit, and Prompt Vault together."),
    ("deep-work-system", "Deep Work System", "A minimal system for planning your week around focused, high-output blocks."),
    ("pitch-deck-template", "Investor Pitch Deck Template", "A clean, investor-tested slide template for pre-seed and seed raises."),
    ("ai-ops-guide", "AI Ops Guide", "How to run internal operations using AI agents instead of manual busywork."),
]

categories = [
    ("ai", "AI", "Prompt systems, AI workflows, and playbooks for builders."),
    ("business", "Business", "Frameworks and operating systems for running a business."),
    ("startups", "Startups", "Kits and playbooks for founders shipping fast."),
    ("productivity", "Productivity", "Systems to organize your time, work, and focus."),
    ("templates", "Templates", "Ready-to-use templates for documents and workflows."),
    ("prompts", "Prompts", "Curated prompt packs for daily AI use."),
    ("guides", "Guides", "In-depth written guides on high-leverage topics."),
    ("bundles", "Bundles", "Multiple products packaged together at a lower price."),
]

with open(f"{BASE}/product/_template.html") as f:
    product_template = f.read()

for slug, title, shortdesc in products:
    html = product_template.replace("__SLUG__", slug).replace("__TITLE__", title).replace("__SHORTDESC__", shortdesc)
    with open(f"{BASE}/product/{slug}.html", "w") as f:
        f.write(html)

with open(f"{BASE}/category/_template.html") as f:
    category_template = f.read()

for slug, name, desc in categories:
    html = category_template.replace("__SLUG__", slug).replace("__NAME__", name).replace("__DESC__", desc)
    with open(f"{BASE}/category/{slug}.html", "w") as f:
        f.write(html)

os.remove(f"{BASE}/product/_template.html")
os.remove(f"{BASE}/category/_template.html")

print("Generated", len(products), "product pages and", len(categories), "category pages")
