import re

file_path = r"e:\Đức Thành\corex-ecommerce\js\app.js"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

best_seller_ids = set(
    list(range(1, 6)) + 
    list(range(11, 16)) + 
    list(range(21, 26)) + 
    list(range(31, 36)) + 
    list(range(41, 46)) + 
    list(range(51, 56))
)

def update_badge(match):
    header = match.group(1)
    pid_match = re.search(r'\d+', header)
    if not pid_match:
        return match.group(0)
    pid = int(pid_match.group())
    body = match.group(2)
    footer = match.group(3)
    
    if pid in best_seller_ids:
        if 'badge:' in body:
            body = re.sub(r'badge:\s*"[^"]*"', 'badge: "Best Seller"', body)
        else:
            body = body.rstrip(', \n\t\r') + ',\n    badge: "Best Seller"\n  '
            
    return header + body + footer

new_content = re.sub(r'(id:\s*\d+,)(.*?)(^\s*\})', update_badge, content, flags=re.DOTALL | re.MULTILINE)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)
print("Updated badges in app.js successfully.")
