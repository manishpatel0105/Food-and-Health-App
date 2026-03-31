import json
import os
import urllib.request
import re

outputUrl = "/Users/manishpatel/.gemini/antigravity/brain/720bdf9b-445e-4278-89d5-7011588bdadb/.system_generated/steps/47/output.txt"

public_dir = "/Users/manishpatel/Desktop/AMD/.stitch/public"
os.makedirs(public_dir, exist_ok=True)

with open(outputUrl, "r") as f:
    data = json.load(f)

for screen in data.get("screens", []):
    title = screen.get("title", "Untitled").replace(" ", "_").lower()
    html_info = screen.get("htmlCode", {})
    dl_url = html_info.get("downloadUrl")
    
    if not dl_url: continue
    
    safe_title = re.sub(r'[^a-zA-Z0-9_]', '', title)
    file_path = os.path.join(public_dir, f"{safe_title}.html")
    
    print(f"Downloading {title} to {file_path}...")
    try:
        req = urllib.request.Request(dl_url, headers={'User-Agent': 'Mozilla/5.0'})
        import ssl
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        with urllib.request.urlopen(req, context=ctx) as response, open(file_path, 'wb') as out_file:
            out_file.write(response.read())
    except Exception as e:
        print(f"Failed to download {title}: {e}")

print("Creating an index.html...")
index_path = os.path.join(public_dir, "index.html")
with open(index_path, "w") as f:
    f.write("<html><body><h1>Screens</h1><ul>")
    for screen in data.get("screens", []):
        title = screen.get("title", "Untitled").replace(" ", "_").lower()
        safe_title = re.sub(r'[^a-zA-Z0-9_]', '', title)
        f.write(f'<li><a href="{safe_title}.html">{screen.get("title")}</a></li>')
    f.write("</ul></body></html>")

print("Done downloading.")
