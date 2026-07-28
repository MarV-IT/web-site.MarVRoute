import os
from PIL import Image, ImageDraw, ImageFont

ROOT = r"C:\Users\march\Documents\Codex\2026-05-31\new-chat\web-site-route"
ASSETS = os.path.join(ROOT, "assets")
SCREENS = os.path.join(ASSETS, "screens")
os.makedirs(SCREENS, exist_ok=True)

INK = (8, 19, 29)
INK2 = (14, 42, 51)
BLUE = (82, 214, 253)
LIGHT = (223, 247, 252)
MUTED = (150, 178, 188)

def load_font(size, bold=False):
    candidates = [
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()

def vgradient(w, h, top, bottom):
    base = Image.new("RGB", (w, h), top)
    draw = ImageDraw.Draw(base)
    for y in range(h):
        t = y / max(1, h - 1)
        r = int(top[0] + (bottom[0] - top[0]) * t)
        g = int(top[1] + (bottom[1] - top[1]) * t)
        b = int(top[2] + (bottom[2] - top[2]) * t)
        draw.line([(0, y), (w, y)], fill=(r, g, b))
    return base

icon = Image.open(os.path.join(ASSETS, "marv-route-icon.png")).convert("RGBA")

# ---------- OG image 1200x630 ----------
W, H = 1200, 630
og = vgradient(W, H, (10, 24, 33), (5, 14, 20))
d = ImageDraw.Draw(og)
# soft glow
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([820, -160, 1320, 340], fill=(82, 214, 253, 60))
gd.ellipse([-180, 360, 240, 760], fill=(31, 199, 154, 40))
og = Image.alpha_composite(og.convert("RGBA"), glow).convert("RGB")
d = ImageDraw.Draw(og)

ic = icon.resize((132, 132))
og.paste(ic, (80, 80), ic)
d.text((232, 104), "MarV Route", font=load_font(46, True), fill=LIGHT)
d.text((232, 162), "Mileage & Expense Tracking", font=load_font(26), fill=MUTED)

f_h1 = load_font(70, True)
d.text((80, 268), "Every business mile logged.", font=f_h1, fill="white")
d.text((80, 348), "Every deduction counted.", font=f_h1, fill=BLUE)

d.text((80, 452), "Automatic trip detection · IRS & CRA tax estimates · PDF & CSV reports",
       font=load_font(27), fill=MUTED)

# chips
chips = ["USA & Canada", "Miles or km", "6 languages"]
x = 80
for c in chips:
    f = load_font(24)
    tw = d.textlength(c, font=f)
    d.rounded_rectangle([x, 522, x + tw + 44, 574], radius=26, outline=(60, 96, 110), width=2)
    d.text((x + 22, 536), c, font=f, fill=LIGHT)
    x += tw + 44 + 18
og.save(os.path.join(ASSETS, "og-image.png"), "PNG")
print("og-image.png", og.size)

# ---------- placeholder screens ----------
screens = [
    ("home.png", "Home"),
    ("trips.png", "Trips"),
    ("reports.png", "Reports"),
    ("add-trip.png", "Add trip"),
]
sw, sh = 360, 760
for fname, label in screens:
    s = vgradient(sw, sh, (14, 20, 22), (10, 15, 17))
    sd = ImageDraw.Draw(s)
    # status bar dots
    sd.text((22, 22), "10:47", font=load_font(20, True), fill=(210, 220, 224))
    ic2 = icon.resize((96, 96))
    s.paste(ic2, ((sw - 96)//2, 250), ic2)
    f = load_font(30, True)
    tw = sd.textlength(label, font=f)
    sd.text(((sw - tw)//2, 372), label, font=f, fill=(222, 227, 230))
    hint = "Replace with a real screenshot"
    fh = load_font(17)
    tw2 = sd.textlength(hint, font=fh)
    sd.text(((sw - tw2)//2, 416), hint, font=fh, fill=(120, 138, 146))
    s.save(os.path.join(SCREENS, fname), "PNG")
    print("screen", fname, s.size)
