########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Joshua Harris
SID = 1002084448
EMAIL = jeh4448@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03
video = https://drive.google.com/file/d/1UErkuidBmy4uzw4lKkRbKDXOX5KTnHUP/view?usp=drive_link
####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"