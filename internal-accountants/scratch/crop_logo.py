import os
from PIL import Image

image_path = r"c:\Data\client\internal-accountants\public\images\internal accountatnts.png"
if not os.path.exists(image_path):
    print("File not found.")
    exit(1)

img = Image.open(image_path).convert("RGBA")
bbox = img.getbbox()
if bbox:
    cropped_img = img.crop(bbox)
    cropped_img.save(image_path, "PNG")
    print(f"Successfully cropped logo from {img.size} to {cropped_img.size}.")
else:
    print("Logo is empty.")
