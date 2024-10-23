---
layout: post-layout
title: Getting Started with Job Management & Tracking System (JMTS)
author: Desmond Bennett
description: This gets you started in using Job Mananagement & Tracking System (JMTS) which is an enterprise resource planning and job (order) management software.
date: 2024-10-18
categories:
- Job Management & Tracking System
img: JMTSLogo.svg
thumb: JMTSLogo.svg
---

<h2>What is JMTS?</h2>
Job Management and Tracking System (JMTS) is a web based enterprise application 
that is used to facilitate the processes of recording, editing, viewing, reporting 
and tracking data for any job undertaken by an organization. 

### Definitions

#### Required field 
This is the term used to refer to any form field which must be filled out with 
data and should never be left blank. The field label for these fields are shown in bold font.

#### Authorized User
This is the term used to describe an entity that is permitted to log into JMTS 
with a valid username and password.

#### Job
A job refers to any official task that an individual undertakes on behalf of his/her organization.

#### Job Entry 
This is the term used to refer to a combination of data that is saved in JMTS 
and represent only one job. Each job entry is uniquely identified by a specially 
generated code called a Job Number. However, it is possible for an authorized 
user to enter a Job Number in any format.

#### Job Sample
A Job Sample refers to data entered into JMTS for each sample of product(s) associated with a job.

## User Authentication

A person who intends to use JMTS must be authenticated and become an 
**authorized user** by doing the following:

1.	Open a browser then enter JMTS address (e.g. http://localhost/jmts) 
into the address field of the browser.
2.	When the Login Dialog appears, type a valid username and password then 
press the Login button as shown in the Figure 1 below.
3.	A person whose login attempt is validated will be directed to their 
'Home' page of JMTS. 

#### Figure 1: Login Dialog
<img src="https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/login%20dialog.png?raw=true" 
    alt="Login Dialog" />

## Job Entry

The following steps can be taken to create a new job:

1.	Click the New button as shown in _Figure 2: The Job Browser_.
2.	When the Job Detail GUI pops up, each required field, in the General 
tab of the interface, should be appropriately filled out.
3.	If the job includes any sample(s), a sample entry should be made via 
the Samples tab of the interface by doing the following:
a)	Click the New button in the Samples tab. 
b)	When the ‘Job Sample’ GUI pops up, fill out the relevant fields under both the ‘General’ tab.
c)	Click the ‘Ok’ button to complete the sample entry.
4.	Select the ‘Services’ tab.
5.	All the relevant tick boxes and or fields should be appropriately filled out and or ticked.
6.	Select the ‘Costing & Payment’ tab.
7.	All the relevant fields should be appropriately filled out.
8.	Click the ‘Save’ button to complete the job entry. 

It is recommended that the ‘Save’ button be clicked as much as is reasonable 
throughout the entire data entry process before the job entry is completed.

## Job Update

<table border="0px hidden white">
 <tr>
    <td><em>Figure 2: The Job Browser</em></td>
    <td><em>Job Browser Description</em></td>
 </tr>
 <tr valign="top">
    <td><img src="https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/job%20browser.png?raw=true" alt="Login Dialog" width="400"/>
    </td>
    <td>
      The Job Browser displays jobs that were found after doing a search.
    </td>
 </tr>
</table>

<table border="0px hidden white">
 <tr>
    <td><em>Figure 3: The Job Detail GUI with the General tab selected</em></td>
    <td><em>Job Detail GUI Description</em></td>
 </tr>
 <tr valign="top">
    <td><img src="https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/job%20detail%20dialog.png?raw=true" alt="Login Dialog"/>
    </td>
    <td>
      The Job Detail GUI shows the details of a job.
    </td>
 </tr>
</table>

![The Job Detail GUI with the Services tab selected](https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/job%20detail%20services%20tab.png?raw=true)
<br/>
_Figure 4: The Job Detail GUI with the Services tab selected_

![The Job Detail GUI with the Samples tab selected](https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/job%20detail%20samples%20tab.png?raw=true)
<br/>
_Figure 5: The Job Detail GUI with the Samples tab selected_

![The Job Detail GUI with the Costing & Payment  tab selected](https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/job%20detail%20costing%20and%20payment.png?raw=true)
<br/>
_Figure 6: The Job Detail GUI with the Costing & Payment  tab selected_

![The Job Detail GUI with the Status & Tracking  tab selected](https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/job%20detail%20status%20and%20tracking%20tab.png?raw=true)
<br/>
_Figure 7: The Job Detail GUI with the Status & Tracking  tab selected_

![The Job Sample Window](https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/job%20sample.png?raw=true)
<br/>
_Figure 8: The Job Sample Window_

![The Job Costing Window](https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/job%20costing.png?raw=true)
<br/>
Figure 9: The Job Costing Window

<div>
<img src="https://github.com/DPBandA/job-management-tracking-system/blob/master/doc/images/jmts/cost%20component.png?raw=true" width="300" alt="Figure 10 - Costing Component Window" />
<br/>
Figure 10: Costing Component Window
</div>