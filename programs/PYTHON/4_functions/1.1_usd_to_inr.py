def to_inr(usd_value):
    inr_value = usd_value*83 
    print(f'{usd_value} USD  = {inr_value} INR')

def to_usd(usd_value):
    inr_value = usd_value*83 
    print(f'{inr_value} INR = {usd_value} USD  ')

convertor = str(input('press (I)ndian value or (U)SD value: ')).lower()
value = int(input('Enter the value: '))
if convertor == "i":
    to_inr(value)
else:
    to_usd(value)

