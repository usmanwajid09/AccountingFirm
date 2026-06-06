import os

root_dir = r"c:\Data\client"
queries = ["gray-700", "gray-900", "gray"]

for root, dirs, files in os.walk(root_dir):
    # Skip node_modules and .next
    if "node_modules" in dirs:
        dirs.remove("node_modules")
    if ".next" in dirs:
        dirs.remove(".next")
    if ".git" in dirs:
        dirs.remove(".git")
        
    for file in files:
        if file.endswith((".js", ".jsx", ".html", ".css")):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                    for q in queries:
                        if q in content:
                            print(f"Found '{q}' in {file_path}")
            except Exception as e:
                pass
