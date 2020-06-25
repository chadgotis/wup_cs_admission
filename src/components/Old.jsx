<form>
  <div className="main">
    <div className="personal-info">
      <p>Personal Information</p>
      <div className="input-group">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label htmlFor="middlename">Middle Name</label>
        <input
          type="text"
          name="middlename"
          onChange={(e) =>
            setInfo({
              ...info,
              middleName: e.target.value,
            })
          }
        />
      </div>
      <div className="input-group">
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
        />
      </div>
      <div
        className="input-group"
        onChange={(e) => setInfo({ ...info, sex: e.target.value })}
      >
        <label htmlFor="lastname">Sex</label>
        <input type="radio" name="sex" value="Male" defaultChecked />
        <label htmlFor="male">Male</label>
        <input type="radio" name="sex" value="Female" />
        <label htmlFor="male">Female</label>
      </div>
      <div className="input-group">
        <label htmlFor="lastSchool">
          Previous School / Last School Attended
        </label>
        <input type="text" name="lastSchool" />
      </div>
    </div>
  </div>
  <div className="school-info">
    <p>School Info</p>
    <div className="input-group">
      <label htmlFor="course">Course</label>
      <select name="course">
        <option value="">-- Please Select a Course --</option>
        <option value="Bachelor of Science in Computer Science">
          Bachelor of Science in Computer Science
        </option>
        <option value="Associate in Computer Technology">
          Associate in Computer Technology
        </option>
      </select>
    </div>
    <div className="input-group">
      <label htmlFor="SY">School Year</label>
      <input type="number" maxLength="4" value={date.getFullYear()} />-
      <input type="number" maxLength="4" value={date.getFullYear() + 1} />
    </div>
    <div className="input-group">
      <label htmlFor="sem">Semester</label>
      <select>
        <option value="1st Semester">1st Semester</option>
        <option value="2nd Semester">2nd Semester</option>
        <option value="Summer">Summer</option>
      </select>
    </div>
  </div>
</form>;
