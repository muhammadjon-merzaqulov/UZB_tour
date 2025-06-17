# 1. Rasm asosini tanlaymiz
FROM python:3.12-slim

# 2. Ishchi papkani tanlaymiz
WORKDIR /app

# 3. Loyihadagi requirements.txt va kodlarni konteynerga nusxalash
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Qolgan barcha kodlarni ko'chirish
COPY . .

# 4. Statik fayllarni to'plab olish (optional, agar collectstatic qilmoqchi bo'lsangiz)
# RUN python manage.py collectstatic --noinput

# 5. Standart port
EXPOSE 8000

# 6. Django runserver ishga tushurish
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
