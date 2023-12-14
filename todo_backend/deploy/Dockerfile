FROM python:3

# Set environment variables
ENV PYTHONUNBUFFERED 1

COPY requirements.txt /

# Install dependencies.
RUN pip install -r /requirements.txt

# Set work directory.
RUN mkdir /src_code
WORKDIR /src_code

# Copy project code.
COPY . /src_code/

EXPOSE 8080

CMD ["uwsgi", "--http", ":8080", "--ini", "./uwsgi/uwsgi.ini"]