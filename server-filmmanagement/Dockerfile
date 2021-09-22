FROM python:rc-alpine
COPY src /temp/src
COPY main.py /temp/main.py
COPY requirements.txt /temp/requirements.txt
RUN pip install -r /temp/requirements.txt
EXPOSE 5001
CMD python3 /temp/main.py
