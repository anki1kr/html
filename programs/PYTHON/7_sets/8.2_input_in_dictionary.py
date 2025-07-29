# WAP to input in subject_marks
# enter marks of student in subject_marks

def student_data():
    try:
        subject_marks = {}
        count  = int(input('Enter the number of subject: '))

        for i in range(count):
            subject = input(f'\nSub{i+1} name : ')
            marks = int(input(f'Sub{i+1} marks :'))
            subject_marks[subject] = marks
            
        return subject_marks
            
    except Exception as e:  
        return f'Enter correct value , error occured {e}'

print(student_data())