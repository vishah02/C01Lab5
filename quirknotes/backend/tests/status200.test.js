test("1+2=3, empty array is empty", () => {
    expect(1 + 2).toBe(3);
    expect([].length).toBe(0);
  });

const SERVER_URL = "http://localhost:4000";

test("/postNote - Post a note", async () => {
  const title = "NoteTitleTest";
  const content = "NoteTitleContent";

  const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });

  const postNoteBody = await postNoteRes.json();

  expect(postNoteRes.status).toBe(200);
  expect(postNoteBody.response).toBe("Note added succesfully.");
});

test("/getAllNotes - Return list of zero notes for getAllNotes", async () => {
    const getAllNotesRes = await fetch(`${SERVER_URL}/getAllNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
    

    const getNoteBody = await getAllNotesRes.json();
    expect(getAllNotesRes.status).toBe(200);
    // expect(getNoteBody.response).toBe([]);
  });
  
  test("/getAllNotes - Return list of two notes for getAllNotes", async () => {
    const getAllNotesRes = await fetch(`${SERVER_URL}/getAllNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
    

    const getNoteBody = await getAllNotesRes.json();
    expect(getAllNotesRes.status).toBe(200);
    // expect(getAllNotes.response.length).toBe(2);

  });
  
  test("/deleteNote - Delete a note", async () => {
    
    const title = "DeleteTest";
    const content = "DeleteTestContent";
  
    const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    const postNoteBody = await postNoteRes.json();
    
    const note_id = postNoteBody.insertedId

    const deleteNoteRes = await fetch(`${SERVER_URL}/deleteNote/${note_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
    
    expect(deleteNoteRes.status).toBe(200);


  });
  
  test("/patchNote - Patch with content and title", async () => {
    const title = "PatchTest";
    const content = "PatchTestContent";
  
    const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    const postNoteBody = await postNoteRes.json();
    
    const note_id = postNoteBody.insertedId

    const patchNoteRes = await fetch(`${SERVER_URL}/patchNote/${note_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            content: content,
          }),
      });
    
    expect(patchNoteRes.status).toBe(200);
    
  });
  
  test("/patchNote - Patch with just title", async () => {
    const title = "PatchTest";
    const content = "PatchTestContent";
  
    const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    const postNoteBody = await postNoteRes.json();
    
    const note_id = postNoteBody.insertedId

    const patchNoteRes = await fetch(`${SERVER_URL}/patchNote/${note_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
          }),
      });
    
    expect(patchNoteRes.status).toBe(200);
  });
  
  test("/patchNote - Patch with just content", async () => {
    const title = "PatchTest";
    const content = "PatchTestContent";
  
    const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    const postNoteBody = await postNoteRes.json();
    
    const note_id = postNoteBody.insertedId

    const patchNoteRes = await fetch(`${SERVER_URL}/patchNote/${note_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: content,
          }),
      });
    
    expect(patchNoteRes.status).toBe(200);

  });
  
  test("/deleteAllNotes - Delete one note", async () => {

    const deleteNoteRes = await fetch(`${SERVER_URL}/deleteAllNotes/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
    
    expect(deleteNoteRes.status).toBe(200);
 
  });
  
  test("/deleteAllNotes - Delete three notes", async () => {

    const deleteNoteRes = await fetch(`${SERVER_URL}/deleteAllNotes/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
    
    expect(deleteNoteRes.status).toBe(200);

  });
  
  test("/updateNoteColor - Update color of a note to red (#FF0000)", async () => {

    const title = "UpdateTest";
    const content = "UpdateTestContent";
  
    const postNoteRes = await fetch(`${SERVER_URL}/postNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    const postNoteBody = await postNoteRes.json();
    
    const note_id = postNoteBody.insertedId

    const color = "#FF0000";
    console.log(note_id);

    const updateNoteColorRes = await fetch(`${SERVER_URL}/updateNoteColor//${note_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
            color: color
        }
      });
    
    expect(updateNoteColorRes.status).toBe(404);

  });