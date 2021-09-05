from typing import List
from utils import download_contact_list_csv
from concurrent.futures import ThreadPoolExecutor
from utils import download_csv
import csv

base_csv_url = other_csv_url = 'https://docs.google.com/spreadsheets/d/1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE/export?format=csv&id=1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE&gid='
other_csv_url = f'{base_csv_url}168970715'
wichakarn_csv_url = f'{base_csv_url}1451517396'
pat_csv_url = f'{base_csv_url}1863263145'
silpvat_csv_url = f'{base_csv_url}1957563667'
geela_csv_url = f'{base_csv_url}1989655880'


def main():
    csv_urls = [other_csv_url, wichakarn_csv_url,
                pat_csv_url, silpvat_csv_url, geela_csv_url]

    csv_files = []
    with ThreadPoolExecutor() as ex:
        csv_files = [f for f in ex.map(download_csv, csv_urls)]

    # map(extract_csv, csv_files)
    extract_csv(csv_files[0])
    
def extract_csv(file: List[str]):
    reader = csv.DictReader(file)
    # print(file[0].split(','))
    for line in reader:
        # club_name = line['ชื่อชมรม : กรอกชื่อเต็ม และชื่อย่อในวงเล็บ (ถ้ามี)']
        # about = line['ข้อมูลชมรม : ขอให้เรียบเรียงออกมาสั้น กระชับ และได้ใจความ เพื่อให้ง่ายต่อความเข้าใจของน้อง ๆ  ปีหนึ่ง เช่น ชมรมทำอะไร เพื่อใคร (ถ้ามี หากไม่มีให้ใส่ -) ']
        # what_to_expect = line['สิ่งที่น้องๆจะได้รับจากการเข้าร่วมชมรม']
        # contact = line['ช่องทางการติดต่อและติดตามข้อมูลข่าวสารจากชมรม (เช่น Facebook หรือ Instagram)']
        # recruitment_period = line['ระยะเวลาในการเปิดรับสมัครสมาชิกชมรม (สามารถระบุคร่าว ๆ ได้ ถ้าเปิดรับสมัครเป็นช่วง ๆ)']
        # name_en = line['ชื่อชมรมแบบเป็นภาษาอังกฤษ (สามารถใช้ภาษาคาราโอเกะได้ถ้าไม่มีจริงๆ)']
        print(line['เข้าตอบคำถามในเว็บไซต์']) # this still breaks

if __name__ == '__main__':
    main()

# for file in csv_files:
#     reader = csv.reader(file)
#     with open('keys.txt', 'w', encoding='utf-8') as f:
#         for e in next(reader):
#             f.write(e + '\n')